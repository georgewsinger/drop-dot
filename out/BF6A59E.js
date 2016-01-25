goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62531__i = 0, G__62531__a = new Array(arguments.length -  0);
while (G__62531__i < G__62531__a.length) {G__62531__a[G__62531__i] = arguments[G__62531__i + 0]; ++G__62531__i;}
  args = new cljs.core.IndexedSeq(G__62531__a,0);
} 
return G__62530__delegate.call(this,args);};
G__62530.cljs$lang$maxFixedArity = 0;
G__62530.cljs$lang$applyTo = (function (arglist__62532){
var args = cljs.core.seq(arglist__62532);
return G__62530__delegate(args);
});
G__62530.cljs$core$IFn$_invoke$arity$variadic = G__62530__delegate;
return G__62530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62534__i = 0, G__62534__a = new Array(arguments.length -  0);
while (G__62534__i < G__62534__a.length) {G__62534__a[G__62534__i] = arguments[G__62534__i + 0]; ++G__62534__i;}
  args = new cljs.core.IndexedSeq(G__62534__a,0);
} 
return G__62533__delegate.call(this,args);};
G__62533.cljs$lang$maxFixedArity = 0;
G__62533.cljs$lang$applyTo = (function (arglist__62535){
var args = cljs.core.seq(arglist__62535);
return G__62533__delegate(args);
});
G__62533.cljs$core$IFn$_invoke$arity$variadic = G__62533__delegate;
return G__62533;
})()
;

return null;
});
