goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__259741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__259741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259742__i = 0, G__259742__a = new Array(arguments.length -  0);
while (G__259742__i < G__259742__a.length) {G__259742__a[G__259742__i] = arguments[G__259742__i + 0]; ++G__259742__i;}
  args = new cljs.core.IndexedSeq(G__259742__a,0);
} 
return G__259741__delegate.call(this,args);};
G__259741.cljs$lang$maxFixedArity = 0;
G__259741.cljs$lang$applyTo = (function (arglist__259743){
var args = cljs.core.seq(arglist__259743);
return G__259741__delegate(args);
});
G__259741.cljs$core$IFn$_invoke$arity$variadic = G__259741__delegate;
return G__259741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__259744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__259744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__259745__i = 0, G__259745__a = new Array(arguments.length -  0);
while (G__259745__i < G__259745__a.length) {G__259745__a[G__259745__i] = arguments[G__259745__i + 0]; ++G__259745__i;}
  args = new cljs.core.IndexedSeq(G__259745__a,0);
} 
return G__259744__delegate.call(this,args);};
G__259744.cljs$lang$maxFixedArity = 0;
G__259744.cljs$lang$applyTo = (function (arglist__259746){
var args = cljs.core.seq(arglist__259746);
return G__259744__delegate(args);
});
G__259744.cljs$core$IFn$_invoke$arity$variadic = G__259744__delegate;
return G__259744;
})()
;

return null;
});
