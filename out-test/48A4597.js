goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21474__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21475__i = 0, G__21475__a = new Array(arguments.length -  0);
while (G__21475__i < G__21475__a.length) {G__21475__a[G__21475__i] = arguments[G__21475__i + 0]; ++G__21475__i;}
  args = new cljs.core.IndexedSeq(G__21475__a,0);
} 
return G__21474__delegate.call(this,args);};
G__21474.cljs$lang$maxFixedArity = 0;
G__21474.cljs$lang$applyTo = (function (arglist__21476){
var args = cljs.core.seq(arglist__21476);
return G__21474__delegate(args);
});
G__21474.cljs$core$IFn$_invoke$arity$variadic = G__21474__delegate;
return G__21474;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21477__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21478__i = 0, G__21478__a = new Array(arguments.length -  0);
while (G__21478__i < G__21478__a.length) {G__21478__a[G__21478__i] = arguments[G__21478__i + 0]; ++G__21478__i;}
  args = new cljs.core.IndexedSeq(G__21478__a,0);
} 
return G__21477__delegate.call(this,args);};
G__21477.cljs$lang$maxFixedArity = 0;
G__21477.cljs$lang$applyTo = (function (arglist__21479){
var args = cljs.core.seq(arglist__21479);
return G__21477__delegate(args);
});
G__21477.cljs$core$IFn$_invoke$arity$variadic = G__21477__delegate;
return G__21477;
})()
;

return null;
});
