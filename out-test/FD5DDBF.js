goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73205__i = 0, G__73205__a = new Array(arguments.length -  0);
while (G__73205__i < G__73205__a.length) {G__73205__a[G__73205__i] = arguments[G__73205__i + 0]; ++G__73205__i;}
  args = new cljs.core.IndexedSeq(G__73205__a,0);
} 
return G__73204__delegate.call(this,args);};
G__73204.cljs$lang$maxFixedArity = 0;
G__73204.cljs$lang$applyTo = (function (arglist__73206){
var args = cljs.core.seq(arglist__73206);
return G__73204__delegate(args);
});
G__73204.cljs$core$IFn$_invoke$arity$variadic = G__73204__delegate;
return G__73204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73208__i = 0, G__73208__a = new Array(arguments.length -  0);
while (G__73208__i < G__73208__a.length) {G__73208__a[G__73208__i] = arguments[G__73208__i + 0]; ++G__73208__i;}
  args = new cljs.core.IndexedSeq(G__73208__a,0);
} 
return G__73207__delegate.call(this,args);};
G__73207.cljs$lang$maxFixedArity = 0;
G__73207.cljs$lang$applyTo = (function (arglist__73209){
var args = cljs.core.seq(arglist__73209);
return G__73207__delegate(args);
});
G__73207.cljs$core$IFn$_invoke$arity$variadic = G__73207__delegate;
return G__73207;
})()
;

return null;
});
