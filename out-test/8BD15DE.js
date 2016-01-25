goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37380__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37381__i = 0, G__37381__a = new Array(arguments.length -  0);
while (G__37381__i < G__37381__a.length) {G__37381__a[G__37381__i] = arguments[G__37381__i + 0]; ++G__37381__i;}
  args = new cljs.core.IndexedSeq(G__37381__a,0);
} 
return G__37380__delegate.call(this,args);};
G__37380.cljs$lang$maxFixedArity = 0;
G__37380.cljs$lang$applyTo = (function (arglist__37382){
var args = cljs.core.seq(arglist__37382);
return G__37380__delegate(args);
});
G__37380.cljs$core$IFn$_invoke$arity$variadic = G__37380__delegate;
return G__37380;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37383__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37384__i = 0, G__37384__a = new Array(arguments.length -  0);
while (G__37384__i < G__37384__a.length) {G__37384__a[G__37384__i] = arguments[G__37384__i + 0]; ++G__37384__i;}
  args = new cljs.core.IndexedSeq(G__37384__a,0);
} 
return G__37383__delegate.call(this,args);};
G__37383.cljs$lang$maxFixedArity = 0;
G__37383.cljs$lang$applyTo = (function (arglist__37385){
var args = cljs.core.seq(arglist__37385);
return G__37383__delegate(args);
});
G__37383.cljs$core$IFn$_invoke$arity$variadic = G__37383__delegate;
return G__37383;
})()
;

return null;
});
