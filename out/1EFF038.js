goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24214__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24215__i = 0, G__24215__a = new Array(arguments.length -  0);
while (G__24215__i < G__24215__a.length) {G__24215__a[G__24215__i] = arguments[G__24215__i + 0]; ++G__24215__i;}
  args = new cljs.core.IndexedSeq(G__24215__a,0);
} 
return G__24214__delegate.call(this,args);};
G__24214.cljs$lang$maxFixedArity = 0;
G__24214.cljs$lang$applyTo = (function (arglist__24216){
var args = cljs.core.seq(arglist__24216);
return G__24214__delegate(args);
});
G__24214.cljs$core$IFn$_invoke$arity$variadic = G__24214__delegate;
return G__24214;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24217__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24218__i = 0, G__24218__a = new Array(arguments.length -  0);
while (G__24218__i < G__24218__a.length) {G__24218__a[G__24218__i] = arguments[G__24218__i + 0]; ++G__24218__i;}
  args = new cljs.core.IndexedSeq(G__24218__a,0);
} 
return G__24217__delegate.call(this,args);};
G__24217.cljs$lang$maxFixedArity = 0;
G__24217.cljs$lang$applyTo = (function (arglist__24219){
var args = cljs.core.seq(arglist__24219);
return G__24217__delegate(args);
});
G__24217.cljs$core$IFn$_invoke$arity$variadic = G__24217__delegate;
return G__24217;
})()
;

return null;
});
