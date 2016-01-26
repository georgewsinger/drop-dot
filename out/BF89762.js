goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__287549__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__287549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__287550__i = 0, G__287550__a = new Array(arguments.length -  0);
while (G__287550__i < G__287550__a.length) {G__287550__a[G__287550__i] = arguments[G__287550__i + 0]; ++G__287550__i;}
  args = new cljs.core.IndexedSeq(G__287550__a,0);
} 
return G__287549__delegate.call(this,args);};
G__287549.cljs$lang$maxFixedArity = 0;
G__287549.cljs$lang$applyTo = (function (arglist__287551){
var args = cljs.core.seq(arglist__287551);
return G__287549__delegate(args);
});
G__287549.cljs$core$IFn$_invoke$arity$variadic = G__287549__delegate;
return G__287549;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__287552__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__287552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__287553__i = 0, G__287553__a = new Array(arguments.length -  0);
while (G__287553__i < G__287553__a.length) {G__287553__a[G__287553__i] = arguments[G__287553__i + 0]; ++G__287553__i;}
  args = new cljs.core.IndexedSeq(G__287553__a,0);
} 
return G__287552__delegate.call(this,args);};
G__287552.cljs$lang$maxFixedArity = 0;
G__287552.cljs$lang$applyTo = (function (arglist__287554){
var args = cljs.core.seq(arglist__287554);
return G__287552__delegate(args);
});
G__287552.cljs$core$IFn$_invoke$arity$variadic = G__287552__delegate;
return G__287552;
})()
;

return null;
});
