goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22810__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22811__i = 0, G__22811__a = new Array(arguments.length -  0);
while (G__22811__i < G__22811__a.length) {G__22811__a[G__22811__i] = arguments[G__22811__i + 0]; ++G__22811__i;}
  args = new cljs.core.IndexedSeq(G__22811__a,0);
} 
return G__22810__delegate.call(this,args);};
G__22810.cljs$lang$maxFixedArity = 0;
G__22810.cljs$lang$applyTo = (function (arglist__22812){
var args = cljs.core.seq(arglist__22812);
return G__22810__delegate(args);
});
G__22810.cljs$core$IFn$_invoke$arity$variadic = G__22810__delegate;
return G__22810;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22813__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22814__i = 0, G__22814__a = new Array(arguments.length -  0);
while (G__22814__i < G__22814__a.length) {G__22814__a[G__22814__i] = arguments[G__22814__i + 0]; ++G__22814__i;}
  args = new cljs.core.IndexedSeq(G__22814__a,0);
} 
return G__22813__delegate.call(this,args);};
G__22813.cljs$lang$maxFixedArity = 0;
G__22813.cljs$lang$applyTo = (function (arglist__22815){
var args = cljs.core.seq(arglist__22815);
return G__22813__delegate(args);
});
G__22813.cljs$core$IFn$_invoke$arity$variadic = G__22813__delegate;
return G__22813;
})()
;

return null;
});
