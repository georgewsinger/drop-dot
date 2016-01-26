goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22733__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22734__i = 0, G__22734__a = new Array(arguments.length -  0);
while (G__22734__i < G__22734__a.length) {G__22734__a[G__22734__i] = arguments[G__22734__i + 0]; ++G__22734__i;}
  args = new cljs.core.IndexedSeq(G__22734__a,0);
} 
return G__22733__delegate.call(this,args);};
G__22733.cljs$lang$maxFixedArity = 0;
G__22733.cljs$lang$applyTo = (function (arglist__22735){
var args = cljs.core.seq(arglist__22735);
return G__22733__delegate(args);
});
G__22733.cljs$core$IFn$_invoke$arity$variadic = G__22733__delegate;
return G__22733;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22736__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22737__i = 0, G__22737__a = new Array(arguments.length -  0);
while (G__22737__i < G__22737__a.length) {G__22737__a[G__22737__i] = arguments[G__22737__i + 0]; ++G__22737__i;}
  args = new cljs.core.IndexedSeq(G__22737__a,0);
} 
return G__22736__delegate.call(this,args);};
G__22736.cljs$lang$maxFixedArity = 0;
G__22736.cljs$lang$applyTo = (function (arglist__22738){
var args = cljs.core.seq(arglist__22738);
return G__22736__delegate(args);
});
G__22736.cljs$core$IFn$_invoke$arity$variadic = G__22736__delegate;
return G__22736;
})()
;

return null;
});
