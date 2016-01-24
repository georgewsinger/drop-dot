goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31025__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31026__i = 0, G__31026__a = new Array(arguments.length -  0);
while (G__31026__i < G__31026__a.length) {G__31026__a[G__31026__i] = arguments[G__31026__i + 0]; ++G__31026__i;}
  args = new cljs.core.IndexedSeq(G__31026__a,0);
} 
return G__31025__delegate.call(this,args);};
G__31025.cljs$lang$maxFixedArity = 0;
G__31025.cljs$lang$applyTo = (function (arglist__31027){
var args = cljs.core.seq(arglist__31027);
return G__31025__delegate(args);
});
G__31025.cljs$core$IFn$_invoke$arity$variadic = G__31025__delegate;
return G__31025;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31028__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31029__i = 0, G__31029__a = new Array(arguments.length -  0);
while (G__31029__i < G__31029__a.length) {G__31029__a[G__31029__i] = arguments[G__31029__i + 0]; ++G__31029__i;}
  args = new cljs.core.IndexedSeq(G__31029__a,0);
} 
return G__31028__delegate.call(this,args);};
G__31028.cljs$lang$maxFixedArity = 0;
G__31028.cljs$lang$applyTo = (function (arglist__31030){
var args = cljs.core.seq(arglist__31030);
return G__31028__delegate(args);
});
G__31028.cljs$core$IFn$_invoke$arity$variadic = G__31028__delegate;
return G__31028;
})()
;

return null;
});
