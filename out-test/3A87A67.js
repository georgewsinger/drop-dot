goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42491__i = 0, G__42491__a = new Array(arguments.length -  0);
while (G__42491__i < G__42491__a.length) {G__42491__a[G__42491__i] = arguments[G__42491__i + 0]; ++G__42491__i;}
  args = new cljs.core.IndexedSeq(G__42491__a,0);
} 
return G__42490__delegate.call(this,args);};
G__42490.cljs$lang$maxFixedArity = 0;
G__42490.cljs$lang$applyTo = (function (arglist__42492){
var args = cljs.core.seq(arglist__42492);
return G__42490__delegate(args);
});
G__42490.cljs$core$IFn$_invoke$arity$variadic = G__42490__delegate;
return G__42490;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42494__i = 0, G__42494__a = new Array(arguments.length -  0);
while (G__42494__i < G__42494__a.length) {G__42494__a[G__42494__i] = arguments[G__42494__i + 0]; ++G__42494__i;}
  args = new cljs.core.IndexedSeq(G__42494__a,0);
} 
return G__42493__delegate.call(this,args);};
G__42493.cljs$lang$maxFixedArity = 0;
G__42493.cljs$lang$applyTo = (function (arglist__42495){
var args = cljs.core.seq(arglist__42495);
return G__42493__delegate(args);
});
G__42493.cljs$core$IFn$_invoke$arity$variadic = G__42493__delegate;
return G__42493;
})()
;

return null;
});
