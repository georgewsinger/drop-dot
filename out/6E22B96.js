goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22755__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22756__i = 0, G__22756__a = new Array(arguments.length -  0);
while (G__22756__i < G__22756__a.length) {G__22756__a[G__22756__i] = arguments[G__22756__i + 0]; ++G__22756__i;}
  args = new cljs.core.IndexedSeq(G__22756__a,0);
} 
return G__22755__delegate.call(this,args);};
G__22755.cljs$lang$maxFixedArity = 0;
G__22755.cljs$lang$applyTo = (function (arglist__22757){
var args = cljs.core.seq(arglist__22757);
return G__22755__delegate(args);
});
G__22755.cljs$core$IFn$_invoke$arity$variadic = G__22755__delegate;
return G__22755;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22758__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22759__i = 0, G__22759__a = new Array(arguments.length -  0);
while (G__22759__i < G__22759__a.length) {G__22759__a[G__22759__i] = arguments[G__22759__i + 0]; ++G__22759__i;}
  args = new cljs.core.IndexedSeq(G__22759__a,0);
} 
return G__22758__delegate.call(this,args);};
G__22758.cljs$lang$maxFixedArity = 0;
G__22758.cljs$lang$applyTo = (function (arglist__22760){
var args = cljs.core.seq(arglist__22760);
return G__22758__delegate(args);
});
G__22758.cljs$core$IFn$_invoke$arity$variadic = G__22758__delegate;
return G__22758;
})()
;

return null;
});
