goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__391715__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__391715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391716__i = 0, G__391716__a = new Array(arguments.length -  0);
while (G__391716__i < G__391716__a.length) {G__391716__a[G__391716__i] = arguments[G__391716__i + 0]; ++G__391716__i;}
  args = new cljs.core.IndexedSeq(G__391716__a,0);
} 
return G__391715__delegate.call(this,args);};
G__391715.cljs$lang$maxFixedArity = 0;
G__391715.cljs$lang$applyTo = (function (arglist__391717){
var args = cljs.core.seq(arglist__391717);
return G__391715__delegate(args);
});
G__391715.cljs$core$IFn$_invoke$arity$variadic = G__391715__delegate;
return G__391715;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__391718__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__391718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391719__i = 0, G__391719__a = new Array(arguments.length -  0);
while (G__391719__i < G__391719__a.length) {G__391719__a[G__391719__i] = arguments[G__391719__i + 0]; ++G__391719__i;}
  args = new cljs.core.IndexedSeq(G__391719__a,0);
} 
return G__391718__delegate.call(this,args);};
G__391718.cljs$lang$maxFixedArity = 0;
G__391718.cljs$lang$applyTo = (function (arglist__391720){
var args = cljs.core.seq(arglist__391720);
return G__391718__delegate(args);
});
G__391718.cljs$core$IFn$_invoke$arity$variadic = G__391718__delegate;
return G__391718;
})()
;

return null;
});
