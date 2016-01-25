goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27137__i = 0, G__27137__a = new Array(arguments.length -  0);
while (G__27137__i < G__27137__a.length) {G__27137__a[G__27137__i] = arguments[G__27137__i + 0]; ++G__27137__i;}
  args = new cljs.core.IndexedSeq(G__27137__a,0);
} 
return G__27136__delegate.call(this,args);};
G__27136.cljs$lang$maxFixedArity = 0;
G__27136.cljs$lang$applyTo = (function (arglist__27138){
var args = cljs.core.seq(arglist__27138);
return G__27136__delegate(args);
});
G__27136.cljs$core$IFn$_invoke$arity$variadic = G__27136__delegate;
return G__27136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27140__i = 0, G__27140__a = new Array(arguments.length -  0);
while (G__27140__i < G__27140__a.length) {G__27140__a[G__27140__i] = arguments[G__27140__i + 0]; ++G__27140__i;}
  args = new cljs.core.IndexedSeq(G__27140__a,0);
} 
return G__27139__delegate.call(this,args);};
G__27139.cljs$lang$maxFixedArity = 0;
G__27139.cljs$lang$applyTo = (function (arglist__27141){
var args = cljs.core.seq(arglist__27141);
return G__27139__delegate(args);
});
G__27139.cljs$core$IFn$_invoke$arity$variadic = G__27139__delegate;
return G__27139;
})()
;

return null;
});
