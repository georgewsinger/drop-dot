goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15231__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15232__i = 0, G__15232__a = new Array(arguments.length -  0);
while (G__15232__i < G__15232__a.length) {G__15232__a[G__15232__i] = arguments[G__15232__i + 0]; ++G__15232__i;}
  args = new cljs.core.IndexedSeq(G__15232__a,0);
} 
return G__15231__delegate.call(this,args);};
G__15231.cljs$lang$maxFixedArity = 0;
G__15231.cljs$lang$applyTo = (function (arglist__15233){
var args = cljs.core.seq(arglist__15233);
return G__15231__delegate(args);
});
G__15231.cljs$core$IFn$_invoke$arity$variadic = G__15231__delegate;
return G__15231;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15234__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15235__i = 0, G__15235__a = new Array(arguments.length -  0);
while (G__15235__i < G__15235__a.length) {G__15235__a[G__15235__i] = arguments[G__15235__i + 0]; ++G__15235__i;}
  args = new cljs.core.IndexedSeq(G__15235__a,0);
} 
return G__15234__delegate.call(this,args);};
G__15234.cljs$lang$maxFixedArity = 0;
G__15234.cljs$lang$applyTo = (function (arglist__15236){
var args = cljs.core.seq(arglist__15236);
return G__15234__delegate(args);
});
G__15234.cljs$core$IFn$_invoke$arity$variadic = G__15234__delegate;
return G__15234;
})()
;

return null;
});
