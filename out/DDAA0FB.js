goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__286204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__286204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286205__i = 0, G__286205__a = new Array(arguments.length -  0);
while (G__286205__i < G__286205__a.length) {G__286205__a[G__286205__i] = arguments[G__286205__i + 0]; ++G__286205__i;}
  args = new cljs.core.IndexedSeq(G__286205__a,0);
} 
return G__286204__delegate.call(this,args);};
G__286204.cljs$lang$maxFixedArity = 0;
G__286204.cljs$lang$applyTo = (function (arglist__286206){
var args = cljs.core.seq(arglist__286206);
return G__286204__delegate(args);
});
G__286204.cljs$core$IFn$_invoke$arity$variadic = G__286204__delegate;
return G__286204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__286207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__286207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__286208__i = 0, G__286208__a = new Array(arguments.length -  0);
while (G__286208__i < G__286208__a.length) {G__286208__a[G__286208__i] = arguments[G__286208__i + 0]; ++G__286208__i;}
  args = new cljs.core.IndexedSeq(G__286208__a,0);
} 
return G__286207__delegate.call(this,args);};
G__286207.cljs$lang$maxFixedArity = 0;
G__286207.cljs$lang$applyTo = (function (arglist__286209){
var args = cljs.core.seq(arglist__286209);
return G__286207__delegate(args);
});
G__286207.cljs$core$IFn$_invoke$arity$variadic = G__286207__delegate;
return G__286207;
})()
;

return null;
});
